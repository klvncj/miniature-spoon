import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import {
  Button,
  Input,
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { BsViewList } from "react-icons/bs";
import { MdCreateNewFolder, MdOutlineDriveFolderUpload } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { Breadcrumbs } from "@material-tailwind/react";

function Seller() {
  const [ListTitle, setTitle] = useState("");
  const [ListLocation, setLocation] = useState("");
  const [ListPrice, setPrice] = useState("");
  const [ListAddress, setAddress] = useState("");
  const [LsitCategory, setCategory] = useState("");

  const listingsRef = collection(db, "listings");

  console.log(auth?.currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auth?.currentUser);
    try {
      await addDoc(listingsRef, {
        title: ListTitle,
        location: ListLocation,
        price: ListPrice,
        address: ListAddress,
        category: LsitCategory,
      });
      toast.success("Added");
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  const returnSellerListing = (userId, sellerId) => {
    //Search the firestore for where seller has userId that is same
    //If true then performs a get function
    //return * from listing where seller Id == sellerId passed as parameter
    //end
  };
  return (
    <>
      <Nav />
      <div>
        <Breadcrumbs className="bg-white">
          <a href="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <a href="/seller" className="opacity-60">
            <span>Seller</span>
          </a>
        </Breadcrumbs>
      </div>
      <Tabs value="create">
        <TabsHeader>
          <Tab value="create">
            <span className="flex items-center justify-center p-2 gap-2 font-black">
              <MdCreateNewFolder size={28} /> Create
            </span>
          </Tab>
          <Tab value="view">
            <span className="flex items-center justify-center p-2 gap-2 font-black">
              <BsViewList size={28} /> View all listings
            </span>
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="create">
            <main className="h-[80vh] flex justify-center items-center">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <h1 className="flex justify-center items-center text-4xl font-bold gap-2">
                  Create a Listing <MdOutlineDriveFolderUpload size={30} />
                </h1>
                <Input
                  size="lg"
                  label="Title"
                  required
                  type="text"
                  className="p-3"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  size="lg"
                  label="Set a price"
                  required
                  type="number"
                  className="p-3"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                  size="lg"
                  label="Address"
                  required
                  type="text"
                  className=""
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  size="lg"
                  label="location"
                  required
                  type="text"
                  className=""
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Select
                  size="lg"
                  label="Category"
                  onSelect={(e) => setCategory(e.target.value)}
                >
                  <Option value="Apartment">Apartment</Option>
                  <Option value="Land">Land</Option>
                  <Option value="Lodge">Lodge</Option>
                </Select>
                {/* <div class="mb-6 pt-4">
                  <label class="mb-5 block text-xl font-semibold text-[#646466]">
                    Upload File
                  </label>

                  <div class="mb-8">
                    <input type="file" name="file" id="file" class="sr-only" />
                    <label
                      for="file"
                      class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                    >
                      <div>
                        <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                          Drop files here
                        </span>
                        <span class="mb-2 block text-base font-medium text-[#6B7280]">
                          Or
                        </span>
                        <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                          Browse
                        </span>
                      </div>
                    </label>
                  </div>
                </div> */}
                <Input
                  label="Upload files"
                  type="file"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  }
                />
                <Button
                  size="lg"
                  className="w-full"
                  type="submit"
                  color="green"
                >
                  Upload
                </Button>
              </form>
              <ToastContainer />
            </main>
          </TabPanel>
          <TabPanel value="view">
            <main className="h-[90vh]">
              This Would contain a view of the sellers listing
            </main>
          </TabPanel>
        </TabsBody>
      </Tabs>
      <Footer />
    </>
  );
}

export default Seller;
