export default function MobileMenu({ open, onClose }) {
  return (
    <ul className={`md:hidden bg-[#ff004f] fixed top-0 ${open ? 'right-0' : '-right-[200px]'} w-[200px] h-screen pt-[50px] z-20 transition-[right] duration-500`}> 
      <i className="fas fa-times absolute top-[25px] left-[25px] cursor-pointer" onClick={onClose}></i>
      {[
        { href: '#header', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#portfolio', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
      ].map((link) => (
        <li key={link.href} className="block m-[25px]">
          <a href={link.href} onClick={onClose} className="text-white text-[18px] no-underline">{link.label}</a>
        </li>
      ))}
    </ul>
  )
}
