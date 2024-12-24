import { socialLinks } from '../data'
import PageLink from './PageLink'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <>
      {/* Iterate over pageLinks */}
      <footer className="section footer">
        {/* Iterate over pageLinks */}
        <PageLink parentClass="footer-links" linkClass="footer-link" />

        {/* Iterate over socialLinks */}
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink key={link.id} {...link} itemClass="footer-icon" />
            )
          })}
        </ul>

        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
