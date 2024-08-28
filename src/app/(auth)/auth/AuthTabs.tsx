  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import LoginForm from "./LoginForm";

  const AuthTabs = () => {
    return (
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
      </Tabs>
    );
  };

  export default AuthTabs;
