import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

type Props = {
  children: React.ReactNode;
}

export const Layout:React.FC<Props> = ({children}) => {
  return (
    <div  className="sticky-footer">
      <Navigation />
      <div className="sticky-footer-page-body margin">
        {children}
      </div>
      <Footer />
    </div>
  );
};