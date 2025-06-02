import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
<<<<<<< Updated upstream
// Add authentication to the API routes
=======
// TODO: Add authentication to the API routes
router.use('/api', authenticateToken, apiRoutes);
>>>>>>> Stashed changes

router.use('/api', authenticateToken, apiRoutes);

//idk why i thought this was going to be more complicated, but this is it
export default router;
