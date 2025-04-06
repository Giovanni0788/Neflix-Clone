import {
  CheckIcon,
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  XIcon,
} from '@heroicons/react/outline'
import { VolumeUpIcon } from '@heroicons/react/solid'
import MuiModal from '@mui/material/Modal'
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaPlay } from 'react-icons/fa'
import ReactPlayer from 'react-player/lazy'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import useAuth from '../hooks/useAuth'
import { Element, Genre, Movie } from '../typings'

function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState)

    const handleClose = () => {
        setShowModal(false)
      }

  return (
<MuiModal open={showModal} onClose={handleClose}>
<>
Modal
</>
</MuiModal>
  )
}

export default Modal