patch('/:username') BUGS-
1. admin required for user to edit own profile, user needs to be able to only change own details
2. body is not being not validatedd


router.get('/:username')
3.  only admin or user themselve should be able to view user details


router.get('/')
4. too much info being returned


router.post('/login')
5. did not await user.authenticate


function authUser

6. put token in headers for secuirty && verify token instead of decode