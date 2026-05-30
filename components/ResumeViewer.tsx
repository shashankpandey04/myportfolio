"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ComponentType } from "react";

type ResumeViewerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function ResumeViewer({ open, setOpen }: ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(900);
  const [DocumentComponent, setDocumentComponent] =
    useState<ComponentType<any> | null>(null);
  const [PageComponent, setPageComponent] =
    useState<ComponentType<any> | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadPdfRenderer = async () => {
      const mod = await import("react-pdf");
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;

      if (!isMounted) {
        return;
      }

      setDocumentComponent(() => mod.Document as ComponentType<any>);
      setPageComponent(() => mod.Page as ComponentType<any>);
    };

    loadPdfRenderer();

    const updatePageWidth = () => {
      setPageWidth(Math.min(window.innerWidth * 0.82, 920));
    };

    updatePageWidth();
    window.addEventListener("resize", updatePageWidth);
    return () => {
      isMounted = false;
      window.removeEventListener("resize", updatePageWidth);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[90vw] h-[90vh] bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-white/10">
              <span className="text-white font-medium">Resume</span>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close resume viewer"
              >
                ✕
              </button>
            </div>

            <div className="h-[calc(100%-41px)] overflow-y-auto bg-neutral-950 p-3 md:p-6">
              {DocumentComponent && PageComponent ? (
                <DocumentComponent
                file="/cv/resume.pdf"
                onLoadSuccess={(pdf: { numPages: number }) => {
                  setNumPages(pdf.numPages);
                }}
                loading={
                  <p className="py-10 text-center text-sm text-gray-300">
                    Loading resume...
                  </p>
                }
                error={
                  <div className="py-10 text-center text-sm text-gray-300">
                    <p>Could not render the PDF in-browser.</p>
                    <a
                      href="/cv/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-cyan-300 hover:text-cyan-200"
                    >
                      Open resume in a new tab
                    </a>
                  </div>
                }
                  >
                    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4">
                      {Array.from({ length: numPages }, (_, index) => (
                        <PageComponent
                          key={`resume-page-${index + 1}`}
                          pageNumber={index + 1}
                          width={pageWidth}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                          className="overflow-hidden rounded-lg border border-white/10 shadow-xl"
                        />
                      ))}
                    </div>
                  </DocumentComponent>
                ) : (
                  <p className="py-10 text-center text-sm text-gray-300">
                    Loading resume viewer...
                  </p>
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}