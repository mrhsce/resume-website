import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );
  // TODO implement the sending mechanism
  const handleSendMessage = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const subject = `Contact Form Submission from ${data.name}`;
      const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage: ${data.message}`;

      // Create a mailto link
      const mailtoLink = `mailto:mrhsce@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Redirect user to their email client
      window.location.href = mailtoLink;
    },
    [data],
  );

  const inputClasses =
    'rounded-md border border-neutral-300 bg-white text-sm text-neutral-800 placeholder:text-neutral-500 placeholder:text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-600 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-400';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <label className="flex flex-col gap-y-1 text-sm font-medium text-neutral-700 dark:text-neutral-200">
        Name
        <input className={inputClasses} name="name" onChange={onChange} placeholder="Your name" required type="text" />
      </label>
      <label className="flex flex-col gap-y-1 text-sm font-medium text-neutral-700 dark:text-neutral-200">
        Email
        <input
          autoComplete="email"
          className={inputClasses}
          name="email"
          onChange={onChange}
          placeholder="you@example.com"
          required
          type="email"
        />
      </label>
      <label className="flex flex-col gap-y-1 text-sm font-medium text-neutral-700 dark:text-neutral-200">
        Message
        <textarea
          className={inputClasses}
          maxLength={250}
          name="message"
          onChange={onChange}
          placeholder="Tell me about your project or role"
          required
          rows={6}
        />
      </label>
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-md outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-neutral-100 dark:bg-stone-900 dark:hover:bg-stone-800 dark:focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
