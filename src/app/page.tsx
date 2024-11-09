import SideMenu from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import DeleteAccount from "@/feature/accountSetting/components/DeleteAccount";
import Footer from "@/feature/accountSetting/components/Footer";
import PersonalInformationForm from "@/feature/accountSetting/components/PersonalInformationForm";
import PremiumAccount from "@/feature/accountSetting/components/PremiumAccount";
import ShowMyProfile from "@/feature/accountSetting/components/ShowMyProfile";

export default function Home() {
  return (
    <main className="flex h-full">
      <SideMenu className="h-full w-[60%] md:w-[30%] max-w-[300px]" />
      <ScrollArea>
        <div className="pr-5 pl-10 sm:pr-10 md:px-15 md:pr-15 lg:px-20 py-8 h-full space-y-8">
          <PremiumAccount className="" />
          <PersonalInformationForm />
          <ShowMyProfile />
          <DeleteAccount className="" />
          <Footer />
        </div>
      </ScrollArea>
    </main>
  );
}
