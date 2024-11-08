import SideMenu from "@/components/Sidebar";
import DeleteAccount from "@/feature/accountSetting/components/DeleteAccount";
import Footer from "@/feature/accountSetting/components/Footer";
import PersonalInformationForm from "@/feature/accountSetting/components/PersonalInformationForm";
import PremiumAccount from "@/feature/accountSetting/components/PremiumAccount";

export default function Home() {
  return (
    <main className="flex h-full">
      <SideMenu className="h-full w-[30%] max-w-[300px]" />
      <div className="px-20 py-8 h-full space-y-8">
        <PremiumAccount className="" />
        <PersonalInformationForm />
        <DeleteAccount className="" />
        <Footer />
      </div>
    </main>
  );
}
