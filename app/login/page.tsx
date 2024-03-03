'use client';
import Form from '@/components/Form';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const formFields = [
  {
    id: 1,
    label: 'Login',
    required: true,
    type: 'text',
  },
  {
    id: 2,
    label: 'Password',
    required: true,
    type: 'password',
  },
];

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = (formData: { fieldsData: {} }) => {
    console.log('onSubmit', formData);
  };
  return (
    <section className='w-screen h-screen bg-black text-white flex flex-col items-center justify-center bg-black/85 '>
      <Form
        onSubmit={handleSubmit}
        fields={formFields}
        inputClasses={{ input: 'text-[16px]' }}
      />
      <Button
        variant='bordered'
        color='warning'
        className='mt-3'
        onClick={() => router.back()}
      >
        Back
      </Button>
    </section>
  );
};

export default LoginPage;
