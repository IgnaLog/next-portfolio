import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1>404</h1>
        <p>
          This page does not exists. Please return to{" "}
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default custom404;
