import React from 'react'

import useUserType from '../hooks/useUserType'

const user = {
  email: 'gwen@example.com',
  type: 'Admin'
}

function DemoRender() {
  const [isAdmin] = useUserType(user);
  return (
    <div>
      <p>
        {
          isAdmin ? 'Admin user' : 'Not admin user'
        }
      </p>
    </div>
  );
}

export default DemoRender;