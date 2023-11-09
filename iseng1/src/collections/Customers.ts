import { CollectionConfig } from 'payload/types'

const Customers: CollectionConfig = {
  slug: 'Customers',
  auth: {
    disableLocalStrategy: true,
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name:"email",
      type:"text",
      label:"Email",
      required:true
    },
    {
      name:"full_name",
      type:"text",
      label:"Full Name",
      required:true
    },
    {
      name:"birthday",
      type:"date",
      label: "Birthday",
      required:true
    }
  ],
};

export default Customers
