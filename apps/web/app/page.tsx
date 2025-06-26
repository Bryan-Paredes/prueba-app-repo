import { LoginForm } from "@/components/login-form";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardTitle } from "@workspace/ui/components/card";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-red-600">Hello World</h1>
        <LoginForm />
      </div>
      <Button variant={"destructive"}>Este es un Botton</Button>
      <Card className="p-3 shadow-md rounded-lg">
        <CardTitle className="text-2xl">Card Title</CardTitle>
        <CardContent>
          <p>This is some content inside the card.</p>
          <Button variant="default" className="rounded-full">
            Click Me
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
