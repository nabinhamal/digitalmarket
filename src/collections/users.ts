
import { Access, CollectionConfig } from 'payload/types'



export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
<<<<<<< HEAD
        return `<a href ='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify Account</a>`
        
=======
        return PrimaryActionEmailHtml({
          actionLabel: "verify your account",
          buttonText: "Verify Account",
          href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`
        })
>>>>>>> 1a2cc6e8cecd88ca38fc22eba7b23d15fe4c329a
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [     
    {
      name: 'role',
      defaultValue: "user",
      admin: {
        condition: ({req}) => false,
      },
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}