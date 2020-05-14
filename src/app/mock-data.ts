import { Email } from './email';

export const InputEmail: Email[] = [    
	{
		mId: "guid-1",
		unread: true,
		subject : "Training Program",
		content : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
		flagged: false
	},
	{
		mId: "guid-2",
		unread: false,
		subject : "Empower your future",
		content : "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
		flagged: false
	}
];

export const SpamEmail: Email[] = [
	{
		mId: "guid-3",
		unread: true,
		subject : "Pre Approved Loan",
		content : "Congratulations ! <u>Credit card<u> is being shipped to you today!",
		flagged: false
	},
	{
		mId: "guid-4",
		unread: true,
		subject : "You won a lottery!",
		content : "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
		flagged: false
	}
]; 

export const DeletedEmail: Email[] = [
	{
		mId: "guid-5",
		unread: true,
		subject : "Now enjoy reading your Industry Domain Magazines and Books on the go!",
		content : "Stay connected with latest technology trends and premium articles across your favourite categories. Read Best-Selling Magazines on the latest technology news and get access to more than 400 eBooks and Audiobooks across technology categories anytime, anywhere",
		flagged: false
	},
	{
		mId: "guid-6",
		unread: true,
		subject : "Hit pause. Have a blast with BINGO! <b>BINGO Card inside</b>",
		content : "Busy last week? It’s time to take a break and de-stress - because it’s BINGO time with your colleagues!",
		flagged: false
	}
]; 


export const CustomFolderEmail: Email[] = [
	{
		mId: "guid-7",
		unread: true,
		subject : "A Sincere Thank You",
		content : "Team, <br/> Thanks for all the hard work to deliver a critical milestone without any impact in the unprecedented situation and dynamic client environment. Keep up the great work !",
		flagged: false
	},
	{
		mId: "guid-8",
		unread: true,
		subject : "Training Confirmation mail",
		content : "Dear Participant,<br/> Learning and Knowledge Management team is pleased to inform you that your nomination for <b>ReactJs</b> Training scheduled on <b>27-May-20</b> through Teams has been confirmed.",
		flagged: false        
	}
]; 
