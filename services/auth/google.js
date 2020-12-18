import passport from 'passport';

export function authorize()
{
    return passport.authenticate(
        'google', {
            scope: ['profile', 'email']
        }
    );
}

export function callbackAuthorization()
{
    return passport.authenticate('google');
}
