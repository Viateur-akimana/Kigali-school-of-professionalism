import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"


const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="login">
    <LoginForm/>
  </TabsContent>
  <TabsContent value="register">
    <RegisterForm/>
  </TabsContent>
</Tabs>

  )
}

export default AuthTabs