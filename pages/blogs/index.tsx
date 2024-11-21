import Image from "next/image";
import { BlogsTable, db } from "../../lib/db";
import Link from "next/link";
import Layout from "@/components/layout";


// Define the Blog type
interface Blog {
  slug: string;
  title: string;
  image: string;
  description: string;
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
  return (
    <Layout>
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-semibold text-gray-900 mb-6">Blog List</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/blogs/${blog.slug}`} className="block">

                <div className="relative">
                  {/* Placeholder Image */}
                  <div className="bg-gray-300 h-48 w-full">
                  <Image src={`/images/${blog.image}`} alt="Placeholder" width={500} height={500} 
                    className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">
                    {blog.description}
                  </p>
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