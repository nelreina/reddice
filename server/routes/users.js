import { Router } from 'express';
import validateInput from '../../lib/validation/signup';
const log = (object) => console.log(JSON.stringify(object, null, 2));
const router = Router();

router.post('/', (req, res) => {
	const { errors, isValid } = validateInput(req.body.user || {} );
	if (!isValid) {
		res.status(400).json(errors);
	} else {
		res.send('OK');
	}
});

export default router;
