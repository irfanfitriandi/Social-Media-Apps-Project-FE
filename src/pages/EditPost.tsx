import { Button } from "react-daisyui";
import { Layout } from "../components/Layout";

export const EditPost = () => {
  return (
    <Layout>
      <div className="flex items-center gap-3 p-6">
        <img
          src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
          alt="photo-profile"
          className="w-12 rounded-full"
        />
        <div>
          <h3>Dybala</h3>
          <p className="text-xs">30 Feb at 11.11 PM</p>
        </div>
      </div>
      <div className="px-2">
        <textarea
          rows={9}
          className="w-full bg-content border-2 border-secondary rounded-xl p-3"
        ></textarea>
        <div className="flex justify-end ">
          <Button className="mt-2 border-[#606770] w-24 capitalize ">
            Save
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditPost;