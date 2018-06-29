export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Balances',
      url: '/balances',
      icon: 'fa fa-money'
    },
    {
      title: true,
      name: "Token Management",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: 'Token list',
      url: '/tokens',
      icon: 'fa fa-dot-circle-o'
    },
    {
      name: 'Create token',
      url: '/tokens/create',
      icon: 'fa fa-plus'
    },
    {
      title: true,
      name: "User Management",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'fa fa-dot-circle-o'
    },
  ]
};
