export interface AllDoctorsAPIResponse {
  success: boolean;
  message: string;
  data: Data;
}

interface Data {
  totalPages: number;
  totalDocs: number;
  currentPage: number;
  limit: number;
  doctors: Doctor[];
  total: number;
}

interface Doctor {
  _id: string;
  signUpToken: SignUpToken;
  specialities: Speciality[];
  treatableConcerns: TreatableConcern[];
  experience: number;
  lang: string[];
  isApproved: boolean;
  approvedAt: Date;
  created_at: Date;
  phone: string;
  email: string;
  dob: string;
  firstname: string;
  gender: string;
  lastname: string;
  bio: string;
  photo: string;
  title: string;
  city: string;
  country: string;
  location: string;
  zipcode: string;
  isTopDoctor: boolean;
  topDoctorRank: number;
  block: Block;
  isOnline: boolean;
  updatedAt: Date;
  upcomingBookings: [];
  slug: string;
  followersCount: number;
  charges: Charges;
  reviewCount: number;
  averageRating: number;
  nextAvailability: Date | null;
  isBusy: boolean;
  nextConsultationIn: null;
  callWillCutIn: null;
  availableAfter: null;
  timezone?: string;
}

interface Block {
  reason: null | string;
  status: boolean;
  blockedAt?: null;
}

interface Charges {
  video: Audio;
  chat: Chat;
  audio: Audio;
  updated_at: null;
  deleted_at: null;
  _id: string;
  doctor: string;
  offline?: Offline;
  created_at: Date;
  __v: number;
}

interface Audio {
  perMinuteRate?: PerMeRate;
  status: boolean;
}

interface PerMeRate {
  amount: number;
  currency: string;
}

interface Chat {
  perMessageRate: PerMeRate;
  status: boolean;
}

interface Offline {
  status: boolean;
  consult: Consult[];
}

interface Consult {
  timing: number;
  amount: number;
  currency: string;
  _id: string;
}

interface SignUpToken {
  value: null;
  expiresAt: null;
}

interface Speciality {
  _id: string;
  img: string;
  name: string;
  active: boolean;
  __v: number;
  updatedAt: Date;
}

interface TreatableConcern {
  _id: string;
  img: string;
  name: string;
  description: string;
  active: boolean;
  deletedAt: null;
  __v: number;
  featured?: boolean;
}
