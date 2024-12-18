import { BlogsTable, db } from "../../lib/db";
import Link from "next/link";
import Layout from "@/components/layout";
import { CldImage } from "next-cloudinary";
import { TrashIcon } from "@heroicons/react/24/solid"; // Import TrashIcon from Heroicons

// Define the Blog type
interface Blog {
  slug: string;
  title: string;
  image: string;
  description: string;
  id: number;
}

export async function getStaticProps() {
  // const db = await createConnection();
  const result = await db.select().from(BlogsTable);
  const blogs: Blog[] = result as Blog[];

  // await db.end();

  return {
    props: {
      blogs: blogs || [],
    },
  };
}

const BlogsPage = ({ blogs }: { blogs: Blog[] }) => {
  const deleteBlog = async (id: number) => {
    try {
      const response = await fetch(`/api/deleteBlog?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // "Blog deleted successfully"
        alert(result.message);
      } else {
        const error = await response.json();
        console.error("Error:", error.error);
        alert(`Error: ${error.error}`);
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("An unexpected error occurred.");
    }
  };

  const reGenrateImage = async (data:Blog) => {
    try {
      const response = await fetch(`/api/reGenrateImage`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // "Blog deleted successfully"
        alert(result.message);
      } else {
        const error = await response.json();
        console.error("Error:", error.error);
        alert(`Error: ${error.error}`);
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* <h1 className="text-3xl font-semibold text-gray-900 mb-6">Blog List</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden relative"
            >
              {process.env.DEV_ENV === "development" && (
                <>
                  <button
                    onClick={() => reGenrateImage(blog)}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 z-10"
                  >
                    Regenrate Image
                  </button>
                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 z-10"
                  >
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </>
              )}
              <Link href={`/blogs/${blog.slug}`} className="block">
                <div className="relative">
                  {/* Placeholder Image */}
                  <div className="bg-gray-300 h-48 w-full">
                    <CldImage
                      src={blog.image} // Use this sample image or upload your own via the Media Explorer
                      height={343}
                      width={600}
                      alt={blog.slug}
                      crop={{
                        type: "auto",
                        source: true,
                      }}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">{blog.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsPage;
