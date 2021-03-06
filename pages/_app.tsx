import { AppProps } from 'next/app'
import Header from '@/components/organism/HTMLHead'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
	return <div className='text-white font-sans max-w-[768px] mx-auto w-full'>
		<Header />
		<Component {...pageProps} />
	</div>
}

export default MyApp
