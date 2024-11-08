import SideMenu from "@/components/Sidebar";
import PersonalInformationForm from "@/feature/accountSetting/components/PersonalInformationForm";
import PremiumAccount from "@/feature/accountSetting/components/PremiumAccount";

export default function Home() {
  return (
    <main className="flex h-full">
      <SideMenu className="h-full w-[30%] max-w-[300px]" />
      <div className="px-20 py-8 h-full">
        <PremiumAccount className="mb-8" />
        <PersonalInformationForm />
      </div>
    </main>
  );
}
