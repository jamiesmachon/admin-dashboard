import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useFormik, FormikHelpers } from 'formik';
import useUser from '@/hooks/UseUser-hook';
import { useToast } from '@/contexts/Toast-Context';
import { ILoginCredentials } from '@/interfaces/ILoginCredentials-Interface';
import LoadingSpinner from '@/components/loading/LoadingSpinner-Component';

const SignInPage: NextPage = () => {
  const { showToast } = useToast();
  const router = useRouter();
  const { user, isLoading } = useUser();

  // pass the useFormik() hook initial form values and a submit
  // function that will be called when the form is submitted
  const formik = useFormik<ILoginCredentials>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values: ILoginCredentials, { setSubmitting }: FormikHelpers<ILoginCredentials>) => {
      try {
        const response = await signIn('login', {
          username: values.username,
          password: values.password,
          redirect: false, // Set to true if you want Next.js to redirect to the original URL after successful sign in
        });

        // Handle successful sign-in (e.g., redirect to a different page)
        if (!response?.ok && response?.error) {
          showToast(response.error, 'error');
        } else {
          router.push('/admin');
        }

        setSubmitting(false);
      } catch (error) {
        // Handle sign-in error (e.g., show an error message to the user)
        console.log('ERROR:', error);
      }
    },
  });

  if (formik.isSubmitting) {
    return <LoadingSpinner title="Logging in, please wait..." />;
  }

  return (
    <>
      <Head>
        <title>H&H Dashboard - Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
        <div className="my-6 flex items-center gap-x-1 lg:my-0">
          <Image alt="History & Heraldry Group" src="/logo.png" width={100} height={100} className="mr-3" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">H&H Dashboard</span>
        </div>
        <Card
          horizontal
          imgSrc="/images/authentication/login.jpg"
          imgAlt=""
          className="w-full lg:max-w-screen-lg md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
        >
          <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">Sign in to platform</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4 flex flex-col gap-y-3">
              <Label htmlFor="username" value="Your username or email" />
              <TextInput
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                required={true}
              />
            </div>
            <div className="mb-6 flex flex-col gap-y-3">
              <Label htmlFor="password" value="Your password" />
              <TextInput
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required={true}
              />
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Checkbox id="rememberMe" name="rememberMe" />
                <Label htmlFor="rememberMe">Remember me</Label>
              </div>
              <a href="#" className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300">
                Lost Password?
              </a>
            </div>
            <div className="mb-6">
              <Button type="submit" className="w-full lg:w-auto bg-secondary hover:bg-accent">
                Login to your account
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </>
  );
};

export default SignInPage;
