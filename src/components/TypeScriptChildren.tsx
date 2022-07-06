import * as React from "react";

type BoxProps = { children: React.ReactNode; style?: React.CSSProperties };

const Box = ({ children, style = {}}: BoxProps) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple", ...style }}>
      {children}
    </section>
  );
};

export default function TypeScriptChildren() {
  return (
    <div className="">
      Just a string.
      <p>Some HTML that is not nested.</p>

      {/* style is a React.CSSProperties */}
      <Box style={{ borderColor: "purple" }}>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box style={{ borderColor: "green" }}>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </div>
  );
}
