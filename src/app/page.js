import BlogList from "@/componets/blogsList";
import QuillEditor from "@/componets/Quill";

const HomePage = () => {
  return (
    <div>
      <div
                dangerouslySetInnerHTML={{
                  __html: "<p>This is a <strong>test</strong> HTML content.</p>",
                }}
              />
      <h1 className="text-center text-3xl font-bold">Rice Text Editor</h1>
      <QuillEditor />
      <BlogList />
    </div>
  );
};

export default HomePage;
