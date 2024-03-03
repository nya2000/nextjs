import { Field, FormProps } from '@/utils/types';
import { Button, Input, cn } from '@nextui-org/react';
import { FormEvent, useEffect, useState } from 'react';

const Form = ({ onSubmit, fields, inputClasses, formClasses }: FormProps) => {
  const [fieldsValue, setFieldsValue] = useState([]);

  useEffect(() => {
    fields.forEach((field: Field) => {
      setFieldsValue((prev) => ({ ...prev, [field.label]: '' }));
    });
  }, [fields]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      fieldsData: fieldsValue,
    };
    return onSubmit(formData);
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-2 items-center justify-center overflow-auto rounded-2xl p-5 bg-white',
        formClasses?.wrapper
      )}
    >
      <form
        onSubmit={handleSubmit}
        className={cn(
          'flex flex-col items-center justify-center gap-4',
          formClasses?.form
        )}
      >
        <div className='flex flex-col mt-4 w-full max-w-xs gap-4'>
          {fields
            ? fields.map((field: Field) => {
                return (
                  <Input
                    required={field.required}
                    type={field.type}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFieldsValue((prev) => ({
                        ...prev,
                        [field.label]: e.target.value,
                      }))
                    }
                    classNames={{
                      label: cn('text-[12px]', inputClasses?.label),
                      input: cn('text-black', inputClasses?.input),
                      innerWrapper: cn('', inputClasses?.innerWrapper),
                      inputWrapper: cn(
                        'rounded-[30px]',
                        inputClasses?.inputWrapper
                      ),
                    }}
                    key={field.id}
                    placeholder={`Enter ${field.label}`}
                    variant='bordered'
                    label={field.label}
                  />
                );
              })
            : null}
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default Form;
