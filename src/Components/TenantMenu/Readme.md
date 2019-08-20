The Tenant Menu is for navigating between portal instances.

```jsx
import { TENANTS } from '../../demo/data';

<TenantMenu
  currentTenantId="cyberdyne-prod"
  tenants={TENANTS}
  onTenantChange={() => alert('changing tenant')}
  onAddTenant={() => alert('add tenant')}
  onCloseTenantMenu={() => alert('close menu')}
/>;
```
