import AnchorNav from "@/components/posts/AnchorNav";
import Comments from "@/components/posts/Comments";
import Navbar from "@/components/posts/Navbar";


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="flex flex-col bg-[#222222]">
        <Navbar/>
        <AnchorNav/>
        <div>{children}</div>
        <Comments theme="github-dark"/>
      </body>
    </html>
  );
}