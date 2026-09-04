import ProjectPage from "@/components/projects/ProjectPage";

export default function Page() {
  return (
    <ProjectPage
      title="CyniGPT – Transformer Language Model"

      description="A decoder-only Transformer language model built from scratch in PyTorch, featuring custom tokenization, self-attention, causal masking, autoregressive generation, and a complete trainable pipeline."

      image="/projects/cynigpt.png"

      tech={[
        "Python",
        "PyTorch",
        "Transformer",
        "SentencePiece"
      ]}

      overview="
CyniGPT is a decoder-only Transformer language model implemented entirely from scratch using PyTorch.

The project was built to understand how Transformer-based language models actually work at the implementation level rather than relying on pre-built frameworks or model implementations.

It includes the core components required to train and run a generative language model, including a custom SentencePiece tokenizer, multi-head self-attention, causal masking, autoregressive text generation, configurable sampling, and model checkpointing.
"

      problem="
Modern language models are often used through high-level libraries and pre-trained implementations, which can make the underlying mechanics of Transformers difficult to understand.

Instead of treating a language model as a black box, the goal of CyniGPT was to build the core system from the ground up and understand the individual components involved in training and generating text.

This meant implementing the Transformer architecture, tokenization pipeline, training process, checkpointing, and generation workflow rather than simply loading an existing model.
"

      solution="
CyniGPT implements a decoder-only Transformer architecture directly in PyTorch.

The model processes tokenized text using multi-head self-attention with causal masking so that each position can only attend to the appropriate preceding context.

A custom SentencePiece tokenizer converts the training corpus into tokens that can be processed by the model.

The project also includes a complete training pipeline with checkpointing and configurable sampling, allowing the trained model to generate text autoregressively instead of relying on a pre-trained language model.
"

      features={[
        "Decoder-only Transformer architecture implemented in PyTorch",
        "Custom SentencePiece tokenization pipeline",
        "Multi-head self-attention",
        "Causal masking for autoregressive language modeling",
        "Autoregressive text generation",
        "Configurable sampling during generation",
        "Complete model training pipeline",
        "Training checkpoint support",
        "Custom training corpus support",
        "Trainable model rather than a pre-trained model integration"
      ]}

      architecture="
CyniGPT follows the standard flow of a decoder-only autoregressive language model while implementing the major components directly in PyTorch.

The training corpus is first processed through the SentencePiece tokenizer to produce token sequences.

These tokens are passed into the Transformer model, where multi-head self-attention allows the model to learn relationships between tokens while causal masking prevents positions from attending to future tokens.

The resulting representations are used for next-token prediction during training.

During generation, the model predicts tokens autoregressively, feeding generated context back into the model to produce subsequent tokens. Configurable sampling controls how the model selects the next token.

The overall workflow is:

Training Corpus → SentencePiece Tokenizer → Token Sequences → Decoder Transformer → Causal Self-Attention → Next-Token Prediction → Checkpoint

For generation:

Prompt → Tokenization → Transformer → Next Token → Updated Context → Transformer → Generated Text
"

      challenges={[
        "Understanding and implementing the core Transformer architecture rather than relying on pre-built model implementations.",
        "Implementing multi-head self-attention and causal masking as part of the model architecture.",
        "Building a tokenizer pipeline using SentencePiece that integrates with the model's training and generation workflow.",
        "Creating a complete training pipeline capable of saving model checkpoints.",
        "Implementing autoregressive generation where each predicted token becomes part of the context for subsequent predictions.",
        "Providing configurable sampling so generated output does not rely on a single fixed decoding strategy.",
        "Working with the lower-level details of training a language model instead of treating the model as a black-box API."
      ]}

      outcome="
CyniGPT resulted in a fully trainable decoder-only Transformer language model implemented from scratch in PyTorch.

The project provides an end-to-end pipeline covering tokenization, Transformer-based language modeling, training, checkpointing, and autoregressive text generation.

More importantly, the project was built as an exploration of how Transformer language models work internally, replacing high-level pre-built model implementations with a custom implementation of the underlying architecture and training workflow.
"

      githubLink="https://github.com/shashankpandey04/CyniGPT"
    />
  );
}