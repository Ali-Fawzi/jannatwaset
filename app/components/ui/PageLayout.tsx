import {ReactNode, Suspense} from "react";
import {Await, Link, NavLink, useRouteLoaderData} from "@remix-run/react";
import {Drawer, useDrawer} from "~/components/ui/Drawer";
import MenuIcon from "../../asstes/icons/Menu.svg"
import Logo from "../../asstes/icons/Logo.svg"
import Telephone from "../../asstes/icons/Telephone.svg"
import Location from "../../asstes/icons/Location.svg"
import Mail from "../../asstes/icons/Mail.svg"
import Facebook from "../../asstes/icons/Facebook.svg"
import Instagram from "../../asstes/icons/Instagram.svg"
import Telegram from "../../asstes/icons/Telegram.svg"
import LeftArrow from "../../asstes/icons/LeftArrow.svg"
import FooterTelephone from "../../asstes/icons/FooterTelephone.svg"
import FooterLocation from "../../asstes/icons/FooterLocation.svg"
import FooterMail from "../../asstes/icons/FooterMail.svg"
import house from "../../asstes/images/house.png"
import {loader} from "~/root";
import {article} from "~/lib/type";
import {formatDate} from "~/lib/utils";
import {FloatingWhatsApp} from "react-floating-whatsapp";
import whatsappAvatar from '../../asstes/images/top-10-qualities-of-a-call-center-agent.jpg'
type MenuItem = {
    title: string;
    link: string;
};
const menu: MenuItem[] = [
    {
        title: "الرئيسية",
        link: "/"
    },
    {
        title: "حول الشركة",
        link: "/about-us"
    },
    {
        title: "الخدمات",
        link: "/services"
    },
    {
        title: "المشاريع",
        link: "/projects"
    },
    {
        title: "المقالات",
        link: "/articles"
    },
    {
        title: "تواصل معنا",
        link: "/contact-us"
    }
]
export function PageLayout({children}:{children: ReactNode}) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div>
                    <a href="#mainContent" className="sr-only">
                        Skip to content
                    </a>
                </div>
                <div className='bg-ground text-white'>
                    <div className='grid grid-cols-2 sm:grid-cols-4 justify-items-start max-w-7xl text-sm mx-auto px-4'>
                        <span>شركة جنة واسط الزراعية</span>
                        <div className='flex flex-row items-center justify-center gap-1 mr-auto sm:mr-0'>
                            <Telephone className='w-6 h-6 opacity-80' />
                            <span>07800800758</span>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-1'>
                            <Location className='w-6 h-6 -mr-1' />
                            <span>العراق , واسط , الحي</span>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-1 mr-auto'>
                            <Mail className='w-6 h-6 mt-1' />
                            <span>Info@gmail.com</span>
                        </div>
                    </div>
                </div>
                <Header />
                <main role="main" id="mainContent" className="grow bg-white">
                    {children}
                    <FloatingWhatsApp
                        phoneNumber={'+964 774 260 8888'}
                        accountName={'شركة جنة واسط الزراعية'}
                        chatMessage={'مرحبا كيف يمكننا ان نساعدك ؟'}
                        placeholder={'اكتب رسالة'}
                        avatar={whatsappAvatar}
                    />
                </main>
            </div>
            <Footer/>
        </>
    )
}

function MenuDrawer({
    isOpen,
    onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <Drawer open={isOpen} onClose={onClose} openFrom="right">
            <nav className='flex flex-col items-start justify-center gap-4 px-6 md:px-8'>
                {menu.map((menuItem) =>
                    <NavLink
                        key={menuItem.title}
                        onClick={onClose}
                        prefetch={'intent'}
                        to={menuItem.link}
                        className={({isActive}) => isActive ?
                            "text-green font-semibold" : ""
                        }>
                        {menuItem.title}
                    </NavLink>
                )}
            </nav>
        </Drawer>
    );
}

function Header() {
    const {
        isOpen: isMenuOpen,
        openDrawer: openMenu,
        closeDrawer: closeMenu,
    } = useDrawer();

    return (
        <header className='sticky z-40 top-0 bg-white'>
            <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu}/>
            <div
                role="banner"
                className='flex flex-row items-center justify-between m-4 max-w-7xl mx-auto px-4'
            >
                <div className='xl:hidden'>
                    <button
                        onClick={openMenu}
                        className="relative flex items-center justify-center w-8 h-8"
                        aria-label={'hamburger menu'}
                    >
                        <MenuIcon className="h-6 w-6"/>
                    </button>
                </div>
                <div className='flex-none'>
                    <Link to={'/'} prefetch={'intent'}>
                        <div className='flex flex-row-reverse xl:flex-row items-center justify-center gap-2'>
                            <Logo />
                            <p className={'text-green'}>شركة جنة واسط الزراعية</p>
                        </div>
                    </Link>
                </div>
                <nav className='hidden xl:flex flex-row items-center justify-between grow max-w-3xl mx-auto'>
                    {menu.map((menuItem) =>
                        <NavLink
                            key={menuItem.title}
                            prefetch={'intent'}
                            to={menuItem.link}
                            className={({isActive}) => isActive ?
                                "text-green font-semibold" : "animate-smooth hover:text-green"
                            }>
                            {menuItem.title}
                        </NavLink>
                    )}
                </nav>
            </div>
        </header>
    )
}

function Footer() {
    const {articles, assetsUrl} = useRouteLoaderData<typeof loader>('root');

    return (
        <footer aria-labelledby="footer-heading" className="bg-ground text-white/80 text-sm relative">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="pb-10 pt-12 max-w-7xl mx-auto px-4">
                <div className='absolute bottom-0 left-0'>
                    <img src={house} alt=''/>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 relative'>
                    <div className='flex flex-col items-center sm:items-start justify-between gap-3'>
                        <Logo />
                        <span className='font-semibold'>شركة جنة واسط الزراعية</span>
                        <span className='w-full max-w-sm'>هي شركة استثمارات زراعية وتربية الابقار توفر العديد من الخدمات للزبائن .</span>
                        <form className="w-full max-w-sm mb-4">
                            <label htmlFor="newsletter"
                                   className="mb-2 text-sm font-medium sr-only">ادخل البريد الالكتروني</label>
                            <div className="relative">
                                <input
                                    name='email'
                                    type="email"
                                    id="newsletter"
                                    className="block text-black w-full p-4 ps-10 text-sm rounded-full bg-white focus:ring-0 focus:outline-none"
                                    placeholder="ادخل البريد الالكتروني"
                                    required
                                />
                                <button type="submit"
                                        className="absolute end-2.5 bottom-1.5 bg-green animate-smooth hover:bg-green/90 rounded-full p-1">
                                    <LeftArrow />
                                </button>
                            </div>
                        </form>
                        <div className='flex flex-row items-center justify-center gap-9'>
                            <Link to='#'>
                                <Facebook className='w-7 h-7'/>
                            </Link>
                            <Link to='#'>
                                <Instagram className='w-7 h-7'/>
                            </Link>
                            <Link to='#'>
                                <Telegram className='w-7 h-7'/>
                            </Link>
                        </div>
                    </div>
                    <nav className='flex flex-col items-center sm:items-start justify-between max-w-sm w-44 mx-auto gap-3'>
                        <span className='text-white mb-4 text-base'>الصفحات</span>
                        {menu.map((menuItem) =>
                            <NavLink
                                key={menuItem.title}
                                to={menuItem.link}
                                prefetch='intent'
                                className='animate-smooth hover:text-yellow'
                            >
                                {menuItem.title}
                            </NavLink>
                        )}
                    </nav>
                    <nav className='flex flex-col items-center sm:items-start justify-start gap-3'>
                        <span className='text-white mb-4 text-base'>اخر المقالات</span>
                        {articles && (
                            <Suspense fallback={
                                <span className='text-lg font-semibold text-center'>تحميل...</span>
                            }>
                                <Await resolve={articles}>
                                    {(resolvedData) => resolvedData.data.map((article: article) =>
                                        <Link
                                            key={article.id}
                                            to={`/articles/${article.id}`}
                                            prefetch={'intent'}
                                            className='flex flex-row items-center justify-center gap-3 animate-smooth hover:text-yellow overflow-hidden'
                                        >
                                            <img src={`${assetsUrl}/${article.image}`} alt={article.title} className='w-16 h-16 rounded-md flex-none'/>
                                            <div className='flex flex-col items-start justify-evenly gap-1 h-full'>
                                                <span className='text-yellow'>{formatDate(article.createdAt)}</span>
                                                <span>{article.title}</span>
                                            </div>
                                        </Link>
                                    )}
                                </Await>
                            </Suspense>
                        )}
                    </nav>
                    <div className='flex flex-col items-center sm:items-start justify-between max-w-sm mx-auto space-y-3'>
                        <span className='text-white mb-4 text-base'>تواصل معنا</span>
                        <div className='flex flex-row items-start justify-center gap-2'>
                            <FooterTelephone />
                            <span>07800800758</span>
                        </div>
                        <hr className='bg-white opacity-30 w-full -my-4'/>
                        <div className='flex flex-row items-start justify-center gap-2'>
                            <FooterMail />
                            <span>needhelp@company.com</span>
                        </div>
                        <hr className='bg-white opacity-30 w-full -my-4'/>
                        <div className='flex flex-row items-start justify-center gap-2'>
                            <FooterLocation />
                            <span>العراق , واسط , الحي</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
