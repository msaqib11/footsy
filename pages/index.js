import HeroBanner from '@/components/HeroBanner'
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'


export default function Home() {
  return (
    <main >
      <HeroBanner />
      <Wrapper>
        <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] '>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Walk on Clouds with Our Cushioning Shoes</div>
          <div className='text-md md:text-xl'>Our cushioned footwear is designed to keep your feet happy, no matter what your day has in store</div>
        </div>
    {/* product grid starts */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0 my-14'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
    {/* product grid ends */}

      </Wrapper>
    </main>
  )
}
