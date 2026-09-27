"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon-lg" onClick={copy} aria-label="Copy email address">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? "check" : "copy"}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {copied ? <Check className="text-success" /> : <Copy />}
            </motion.span>
          </AnimatePresence>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied" : "Copy email"}</TooltipContent>
    </Tooltip>
  );
}
