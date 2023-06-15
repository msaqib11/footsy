import ProductDetailsCarousel from "@/components/ProductDetailsCarousel"
import RelatedProduct from "@/components/RelatedProduct"
import Wrapper from "@/components/Wrapper"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left col starts */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left col ends */}

          {/* right col starts */}

          <div className="flex-[1] py-3">
            {/* product name */}
            <div className="text-4xl font-semibold mb-2">Jordan Retro G</div>
            {/* subtitle */}
            <div className="text-lg font-semibold mb-5">Men&apos;s Golf Shoes</div>
            {/* price */}
            <div className="text-lg font-semibold">MRP : 19$</div>
            {/* tax */}
            <div className="text-md font-medium text-black/[0.5]">incl of Tax</div>
            {/* message */}
            <div className="text-md font-medium text-black/[0.5] mb-20">{`(Also Include applicable duties)`}</div>

            {/* size range starts */}
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold">Select Size</div>
              <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                Select Guide
              </div>
            </div>
            {/* Select Size range starts */}
            <div className="mb-20">
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              {/* Error message starts */}

              <div className="text-red-600 mt-1 ">
                Size selection is required
              </div>
              {/* Error message Ends */}
            </div>


            {/* Add to card button starts */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-95">
              Add to cart
            </button>
            {/* Add to card button Ends */}

            {/* Wishlist button starts */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75 flex items-center justify-center gap-2">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* Wishlist button Ends */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="text-md mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="text-md mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>

            {/* Select Size range starts */}

            {/* size range ends */}

          </div>
          {/* right col ends */}

        </div>

        <RelatedProduct/>
      </Wrapper>
    </div>
  )
}

export default ProductDetails