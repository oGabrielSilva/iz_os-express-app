import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  Auth as FirebaseAuth,
  User,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth';
import Extra from '../Util/Extra';
import HtmlConstants from '../Util/HtmlConstants';
import { browser } from './firebase/config';

class Auth {
  private windowLoading: HTMLDivElement;
  private app: FirebaseApp;
  private auth: FirebaseAuth;
  private user: User | null;

  public init() {
    this.windowLoading = document.querySelector(
      HtmlConstants.getWindowLoadingClass()
    ) as HTMLDivElement;
    this.app = initializeApp(browser);
    this.auth = getAuth();
    this.config();
  }

  private config() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      if (this.windowLoading) this.windowLoading.classList.add('invisible');
      Extra.onAuthChanged();
    });
  }

  public getUser(): User | null {
    return this.user;
  }

  public getAuth() {
    if (!this.auth) this.auth = getAuth();
    return this.auth;
  }

  public sendEmailForgotPassword(email: string) {
    sendPasswordResetEmail(this.getAuth(), email);
  }

  public async loginUser(email: string, password: string) {
    const success = true;
    try {
      const credentials = await signInWithEmailAndPassword(this.getAuth(), email, password);
      if (credentials && credentials.user) {
        this.user = credentials.user;
        return success;
      }
    } catch (error) {
      console.log(error);
      return !success;
    }
  }

  public async createUser(email: string, password: string) {
    const success = true;
    try {
      const credentials = await createUserWithEmailAndPassword(this.getAuth(), email, password);
      if (credentials && credentials.user) {
        this.user = credentials.user;
        return success;
      }
    } catch (error) {
      console.log(error);
      return !success;
    }
  }

  public async signOut() {
    await this.getAuth().signOut();
    window.location.href = '/';
  }

  public google() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(this.getAuth(), provider);
  }
}

export default new Auth();
