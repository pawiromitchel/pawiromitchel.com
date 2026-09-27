import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: ({ children, ...props }) => (
      <div className="not-prose my-8 w-full overflow-x-auto rounded-xl border">
        <table className="w-full border-collapse text-left text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="border-b bg-muted/60 text-xs font-medium tracking-wide text-foreground uppercase" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th className="px-4 py-3 font-medium" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border-t px-4 py-3 text-muted-foreground" {...props}>
        {children}
      </td>
    ),
    ...components,
  };
}
