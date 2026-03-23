import Comments from "@/components/posts/Comments";


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Comments theme="github-dark"/>
    </html>
  );
}