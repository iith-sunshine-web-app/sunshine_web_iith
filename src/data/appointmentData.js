export const appointmentData = [
  {
    id: 1,
    title: 'Online meet',
    borderColor: 'border-blue-400', // Tailwind class for the border
    contacts: [
      { name: 'Maria Morris', linkText: 'click to book a slot', url: '#' }, // Use your Calendly/booking link
      { name: 'Maria Morris', linkText: 'link', url: '#' },
      { name: 'Maria Morris', linkText: 'link', url: '#' },
    ]
  },
  {
    id: 2,
    title: 'Meet In-person',
    borderColor: 'border-pink-400',
    contacts: [
      { name: 'Maria Morris', linkText: 'click to book a slot', url: '#' },
      { name: 'Maria Morris', linkText: '123@com', url: 'mailto:123@com' }, // Creates an email link
      { name: 'Maria Morris', linkText: '123@com', url: 'mailto:123@com' },
    ]
  },
  {
    id: 3,
    title: 'Through whatsapp',
    borderColor: 'border-green-400',
    contacts: [
      { name: 'Maria Morris', linkText: 'link', url: 'https://wa.me/YOUR_NUMBER' }, // Creates a WhatsApp link
      { name: 'Maria Morris', linkText: 'link', url: 'https://wa.me/YOUR_NUMBER' },
      { name: 'Maria Morris', linkText: 'link', url: 'https://wa.me/YOUR_NUMBER' },
    ]
  },
  {
    id: 4,
    title: 'Through Email',
    borderColor: 'border-orange-400',
    contacts: [
      { name: 'Maria Morris', linkText: '123@com', url: 'mailto:123@com' },
      { name: 'Maria Morris', linkText: '123@com', url: 'mailto:123@com' },
      { name: 'Maria Morris', linkText: '123@com', url: 'mailto:123@com' },
    ]
  }
];