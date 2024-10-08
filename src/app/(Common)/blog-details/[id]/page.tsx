import Main from "@/components/pages/BlogDetails/main";
import BreadcrumbBar from "@/components/UI/BreadcrumbBar";


type IDProps = {
  params: any;
};

const BlogDetails = ({ params }: IDProps) => {
  const { id } = params;

  return (
    <div>
      <BreadcrumbBar header="Blog Details" name="Blog Details"  />
      <Main id={id}/>
    </div>
  );
};

export default BlogDetails;
