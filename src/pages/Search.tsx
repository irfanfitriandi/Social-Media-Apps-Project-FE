import { Layout } from "../components/Layout";
import { InputStd } from "../components/Input";
import { IoMdSearch } from "react-icons/io";

function Search() {
  return (
    <Layout>
      <div className="flex items-center gap-2 mt-5">
        <IoMdSearch className="text-4xl text-primary mb-5" />
        <InputStd placeholder="Search . . ." />
      </div>
      <div className="bg-com border-2 border-secondary rounded-xl mb-5">
        <div className="p-2 border-b-2 border-secondary">
          <div className="flex items-center gap-3 pb-2">
            <img
              src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
              alt="photo-profile"
              className="w-12 rounded-full"
            />
            <div>
              <h3>Dybala</h3>
              <p>Dybala Rosario</p>
            </div>
          </div>
        </div>
        <div className="p-2 border-b-2 border-secondary">
          <div className="flex items-center gap-3 pb-2">
            <img
              src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
              alt="photo-profile"
              className="w-12 rounded-full"
            />
            <div>
              <h3>Dybala</h3>
              <p>Dybala Rosario</p>
            </div>
          </div>
        </div>
        <div className="p-2 border-secondary">
          <div className="flex items-center gap-3 pb-2">
            <img
              src="https://pbs.twimg.com/profile_images/1610613801526890500/aBOa83uV_400x400.jpg"
              alt="photo-profile"
              className="w-12 rounded-full"
            />
            <div>
              <h3>Dybala</h3>
              <p>Dybala Rosario</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Search;
