"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ResumeViewer({ open, setOpen }: any) {
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
              >
                ✕
              </button>
            </div>

            <iframe
              src="/cv/resume.pdf#zoom=page-width"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}