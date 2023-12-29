import Image from 'next/image'
import { Inter } from 'next/font/google'
import PasswordInput from '@/components/PasswordInput'
import CustomButton from '@/components/CustomButton'
import { useState } from 'react'
import { checkPassword } from '@/utils/checkPasswordUtil'
import ValidationDisplay from '@/components/ValidationDisplay'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [validation, setValidation] = useState({
    match: false,
    length: false,
    number: false,
    capital: false,
    lower: false,
    specialChar: false,
    success: false
  });
  const [submitted, setSubmitted] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = () => {
    setSubmitted(true);
    if (password === confirmPassword) {
      setValidation(checkPassword(password, confirmPassword));
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
      setValidation({});
    }
  }

  return (

    <div className="flex items-center justify-center mt-20">
      <div className="border bg-gray-100 p-16 rounded-3xl w-120">
        <div>
          <div className="pb-4 text-xl">Enter Password</div>
          <div className="mb-2">
            <PasswordInput
              placeholder={'Password'}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-3 mb-8">
            <PasswordInput
              placeholder={'Confirm Password'}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <CustomButton
            label={'Submit'}
            onClick={handleSubmit}
          />
          {
            submitted &&
            <div className='py-5'>
              {
                !passwordMatch && (
                  <div className='text-red-500'>
                    Passwords Don't Match!
                  </div>
                )
              }
              {
                !validation.success &&
                <div>
                  <div className='text-red-500'>
                    Invalid Password!
                  </div>
                  <ul>
                    {Object.entries(validation).map(([key, value]) => (
                      <ValidationDisplay key={key} condition={key} value={value} />
                    ))}
                  </ul>
                </div>
              }
              {
                validation.success && (
                  <div className='text-green-500'>
                    Success! All conditions were met!
                  </div>
                )
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}
