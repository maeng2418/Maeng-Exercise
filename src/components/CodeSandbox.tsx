import React from 'react';

interface CodeSandboxProps {
  src: string;
}

const CodeSandbox: React.FC<CodeSandboxProps> = ({ src }) => {
  return (
    <iframe
      src={src}
      className="w-full h-screen border-0 rounded-r overflow-hidden"
      title="CSS Creative List Design &amp; Hover Effects"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default CodeSandbox;
