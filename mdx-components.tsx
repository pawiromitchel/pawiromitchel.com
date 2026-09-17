import React from "react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: ({ children, ...props }) => (
      <div className="my-8 w-full overflow-x-auto rounded-xl border border-border bg-[#0b0f17] shadow-lg">
        <table className="w-full text-left text-sm text-muted border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-[#111827] text-xs font-semibold uppercase tracking-wider text-foreground border-b border-border" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th className="px-4 py-3 font-semibold text-foreground" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="px-4 py-3 border-t border-border/50 text-muted" {...props}>
        {children}
      </td>
    ),
    tr: ({ children, ...props }) => (
      <tr className="hover:bg-white/[0.02] transition-colors" {...props}>
        {children}
      </tr>
    ),
    ...components,
  };
}
