import { Navbar } from "./_components/navbar";


import { Footer } from "./_components/footer";

const ContactLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
    return ( 
    <div>
      {/* <Navbar /> */}
      <main className="pt-30 pb-10 ">
        {children}
      </main>
      {/* <Footer /> */}
    </div> );
}
 
export default ContactLayout;