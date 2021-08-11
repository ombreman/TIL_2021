1. Union Type
'''typescript
let member: ( string | number | boolean ) = 123
'''
2. Unknown Type
- Working similarly to `any` type
- This type can have various types such as string, number but `any` type allows every type in comparison.
'''typescript
let name :unknown
name = 123
name = {}
'''

3. 