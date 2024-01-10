import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const scrollWrap = document.querySelector('.smooth-scroll-wrapper');
    const height = () => scrollWrap.getBoundingClientRect().height;
    const speed = 0.08;
    let offset = 0;

    // Scroll
    const smoothScroll = () => {
        offset += (window.pageYOffset - offset) * speed;
        scrollWrap.style.transform = 'translateY(-' + offset + 'px) translateZ(0)';
        window.requestAnimationFrame(smoothScroll);
    };
    smoothScroll();
    // Resize
    const handleResize = () => {
      document.body.style.height = Math.floor(height()) + 'px';
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
      <div className="smooth-scroll-wrapper">
            <div className="content">
              <h1>
                  No time to explain
              </h1>
              <div className="img"></div>

              <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi ipsam itaque
                  doloribus aliquid, veniam minus laborum doloremque quos ullam. Quas harum iure
                  optio dolorem ea recusandae blanditiis ipsum praesentium.
              </p>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi
                  tenetur sapiente dolor deleniti. Fuga labore pariatur esse. Repudiandae,
                  voluptates nisi soluta architecto inventore hic. Omnis eos expedita sed
                  architecto illum mollitia! Totam aperiam vel consequuntur a, ipsum sapiente sit
                  laborum exercitationem distinctio labore praesentium veniam accusamus, voluptate
                  ratione suscipit!
              </p>
              <div className="img"></div>

              <h1>More than pretty screens</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto suscipit
                  ducimus nostrum, aut minus eius impedit vero numquam est optio reprehenderit
                  itaque quis eligendi quasi repellendus obcaecati neque dolor ipsam nulla
                  praesentium voluptatum. Est assumenda ea voluptatibus! Eaque quo ducimus, unde
                  maxime enim nesciunt debitis voluptatem fuga obcaecati? Aperiam?
              </p>

              <div className="img"></div>

              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea nihil quibusdam
                  repudiandae praesentium quisquam eos, repellendus fugiat dolore! Neque.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>
                  No time to explain
              </h1>
              <div className="img"></div>

              <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi ipsam itaque
                  doloribus aliquid, veniam minus laborum doloremque quos ullam. Quas harum iure
                  optio dolorem ea recusandae blanditiis ipsum praesentium.
              </p>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi
                  tenetur sapiente dolor deleniti. Fuga labore pariatur esse. Repudiandae,
                  voluptates nisi soluta architecto inventore hic. Omnis eos expedita sed
                  architecto illum mollitia! Totam aperiam vel consequuntur a, ipsum sapiente sit
                  laborum exercitationem distinctio labore praesentium veniam accusamus, voluptate
                  ratione suscipit!
              </p>
              <div className="img"></div>

              <h1>More than pretty screens</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto suscipit
                  ducimus nostrum, aut minus eius impedit vero numquam est optio reprehenderit
                  itaque quis eligendi quasi repellendus obcaecati neque dolor ipsam nulla
                  praesentium voluptatum. Est assumenda ea voluptatibus! Eaque quo ducimus, unde
                  maxime enim nesciunt debitis voluptatem fuga obcaecati? Aperiam?
              </p>

              <div className="img"></div>

              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea nihil quibusdam
                  repudiandae praesentium quisquam eos, repellendus fugiat dolore! Neque.
              </p>
            </div>
        </div>
    </>
  )
}

export default App
