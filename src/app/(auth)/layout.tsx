
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ minHeight: "98vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ margin: "5% 5% 0 5%" }}>
          {children}
          <div style={{ height: "10vh" }}></div>
        </div>
      </body>
    </html>
  );
}
